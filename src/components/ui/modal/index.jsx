import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';

import {
  Backdrop,
  Wrapper,
  ModalComponent,
  CloseButton,
  Body,
  Header,
  Title,
} from './components';

const CenteredModal = ({
  children,
  show,
  onClose,
  title,
  maxWidth = 1280,
  fixedWidth = false,
}) => {
  const backdropRef = useRef(null);
  const [wrapperShow, setWrapperShow] = useState(false);
  const [backdropShow, setBackdropShow] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (show) {
      setWrapperShow(true);
      setBackdropShow(true);
      document.body.classList.add('noscroll');
    } else {
      handleClose();
    }
  }, [show]);

  const handleBackdropClick = (event) => {
    if (event.target === backdropRef.current) {
      handleClose();
    }
  };

  const handleClose = () => {
    setBackdropShow(false);
    setTimeout(() => {
      setWrapperShow(false);
      onClose(true);
      document.body.classList.remove('noscroll');
    }, 200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Esc' || e.keyCode === 27) {
      handleClose();
    }
  };

  if (!wrapperShow) return null;

  return ReactDOM.createPortal(
    <Wrapper active={wrapperShow}>
      <Backdrop
        ref={backdropRef}
        active={backdropShow}
        onClick={handleBackdropClick}
      >
        <ModalComponent
          active={backdropShow}
          maxWidth={maxWidth}
          fixedWidth={fixedWidth}
        >
          <Header>
            <Title>{title}</Title>

            <CloseButton onClick={handleClose} size="small">
              <CloseIcon />
            </CloseButton>
          </Header>

          <Body>{children}</Body>
        </ModalComponent>
      </Backdrop>
    </Wrapper>,
    document.body
  );
};

export default CenteredModal;
