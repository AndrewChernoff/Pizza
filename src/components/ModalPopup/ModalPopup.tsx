import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalPopup.scss';

type totalPrice = {
  totalPrice: number
} 

const ModalPopup = (props: totalPrice) => {
  const [show, setShow] = useState(false);
  const {totalPrice} = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="cart__footer_total-pay" onClick={handleShow}>
      Оплатить сейчас
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Итого</Modal.Title>
        </Modal.Header>
        <Modal.Body>К оплате {totalPrice} рублей</Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Отмена
          </Button>
          <Button  onClick={handleClose}>
            ОК
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopup;