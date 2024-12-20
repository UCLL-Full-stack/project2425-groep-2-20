import ExerciseService from "@services/ExerciseService";
import { StatusMessage } from "@types";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AddExerciseForm: React.FC = () => {
  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [nameError, setNameError] = useState<string | null>(null);
  const [setsError, setSetsError] = useState<string | null>(null);
  const [repsError, setRepsError] = useState<string | null>(null);
  const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);
  const router = useRouter();

  const { t } = useTranslation();

  const clearErrors = () => {
    setNameError(null);
    setSetsError(null);
    setRepsError(null);
    setStatusMessages([]);
  };

  const validate = (): boolean => {
    let result = true;

    if (!name || name.trim() === "") {
      setNameError(t('exercise.validate.name'));
      result = false;
    }

    if (sets <= 0) {
      setSetsError(t('exercise.validate.sets'));
      result = false;
    }

    if (reps <= 0) {
      setRepsError(t('exercise.validate.reps'));
      result = false;
    }

    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    clearErrors();

    if (!validate()) {
      return;
    }

    const exercise = { name, sets, reps };
    const response = await ExerciseService.addExercise(exercise);

    if (response.status === 200) {
      setStatusMessages([{ message: t('exercise.added'), type: "success" }]);
      router.push("/");
    }
  };

  return (
    <>
      <h3 className="px-0">{t('exercise.title')}</h3>
      {statusMessages && (
        <div className="row">
          <ul className="list-none mb-3 mx-auto ">
            {statusMessages.map(({ message, type }, index) => (
              <li
                key={index}
                className={classNames({
                  "text-red-800": type === "error",
                  "text-green-800": type === "success",
                })}
              >
                {message}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput" className="block mb-2 text-sm font-medium">
            {t('exercise.label.name')}
          </label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
          />
          {nameError && <div className="text-red-800">{nameError}</div>}
        </div>

        <div>
          <label htmlFor="setsInput" className="block mb-2 text-sm font-medium">
            {t('exercise.label.sets')}
          </label>
          <input
            id="setsInput"
            type="number"
            value={sets}
            onChange={(event) => setSets(Number(event.target.value))}
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
          />
          {setsError && <div className="text-red-800">{setsError}</div>}
        </div>

        <div>
          <label htmlFor="repsInput" className="block mb-2 text-sm font-medium">
            {t('exercise.label.reps')}
          </label>
          <input
            id="repsInput"
            type="number"
            value={reps}
            onChange={(event) => setReps(Number(event.target.value))}
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
          />
          {repsError && <div className="text-red-800">{repsError}</div>}
        </div>

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          {t('exercise.button')}
        </button>
      </form>
    </>
  );
};

export default AddExerciseForm;
