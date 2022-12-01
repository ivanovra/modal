import React, { useState } from "react";
import "./global.css";
import Modal from "./Modal/Modal";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [countOpened, setCountOpened] = useState<number>(0);

  const openModal = (): void => {
    if (isConfirmed) return alert("Действие выполнено");
    setShowModal(true);
    setCountOpened((prev) => prev + 1)
  };

  const showSuccess = (): void => {
    alert("Действие выполнено");
    setIsConfirmed(true)
    setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>Выполнить действие</button>
      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
          showSuccess={showSuccess}
          countOpened={countOpened}
        />
      )}
    </>
  );
};

export default App;
