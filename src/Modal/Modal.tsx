import { FC, useState, useEffect } from "react";
import styled from "styled-components";

interface ModalProps {
  closeModal: () => void;
  showSuccess: () => void;
  countOpened: number;
}

const Modal: FC<ModalProps> = (props) => {
  const { closeModal, showSuccess, countOpened } = props;
  const [timer, setTimer] = useState<any>(5);

  const loopsTime = (): void => {
    setTimeout(function () {
      setTimer(timer - 1);

      loopsTime();
    }, 1000);
  };

  useEffect(() => {
    const timerId = setTimeout(() => setTimer(timer - 1), 1000);

    if (!timer) clearTimeout(timerId);

    return () => clearTimeout(timerId);
  }, [timer]);

  return (
    <ModalBackground>
      <ModalWrapper>
        <ModalHeader>
          <span>Согласие с правилами</span>
          <Close onClick={closeModal}>&#9747;</Close>
        </ModalHeader>
        <ModalContent>
          <span>
            Для данной функции применяются особые условия и правила пользования,
            их необходимо подтвердить, нажав на кнопку "Подтвердить"
          </span>
          <Control>
            <Button onClick={closeModal}>Отмена</Button>
            <Button disabled={timer} onClick={showSuccess}>
              Подтвердить {countOpened > 1 && timer ? timer : null}
            </Button>
          </Control>
        </ModalContent>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(128, 128, 128, 0.5);
  position: absolute;
  top: 0;
`;

const ModalWrapper = styled.div`
  background-color: white;
  width: 500px;
  height: 300px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -250px;
`;

const ModalHeader = styled.div`
  height: 20px;
  border-bottom: 1px solid grey;
  padding: 20px;
`;

const ModalContent = styled.div`
  padding: 20px 20px 0 20px;
`;

const Close = styled.div`
  float: right;
  cursor: pointer;
  margin: -10px -10px 0 0;
`;

const Control = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Button = styled.button`
  margin: 5px;
`;
