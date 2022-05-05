import styled from 'styled-components';
import { deleteProduct } from 'apis/product';
import { Navigate, useNavigate } from 'react-router-dom';

function DetailDeleteModal(props) {
  const navigate = useNavigate();
  const { openModal, setOpenModal, product } = props;
  const productId = product.id;

  const goToList = () => {
    navigate('/product', {
      replace: true,
    });
  };

  const onDelete = () => {
    deleteProduct(productId);
    goToList();
  };

  return openModal ? (
    <ModalWrapper onClick={() => setOpenModal(false)}>
      <DeleteModal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ConfirmBlock>
          <Alert>알림</Alert>
          <Confirmation
            onClick={e => {
              e.stopPropagation();
            }}
          >
            상품을 삭제하시겠어요?
          </Confirmation>
        </ConfirmBlock>
        <ConfirmationButton>
          <Cancel onClick={() => setOpenModal(false)}>취소</Cancel>
          <DeleteConfirm onClick={() => onDelete()}>확인</DeleteConfirm>
        </ConfirmationButton>
      </DeleteModal>
    </ModalWrapper>
  ) : null;
}

export default DetailDeleteModal;

const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

const DeleteModal = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  position: fixed;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  // 스마트폰
  @media (max-width: 690px) {
    width: 220px;
    height: 105px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 280px;
    height: 120px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 280px;
    height: 120px;
  }
`;

const ConfirmBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(191, 191, 191);
  pointer-events: none;
`;

const Alert = styled.p`
  font-weight: bold;
  padding-top: 5%;
`;

const Confirmation = styled.p`
  padding: 5%;
`;

const ConfirmationButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  padding: 4%;
`;

const Cancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120%;
  width: 100%;
  height: 30%;
  color: #f37802;
  border-right: 1px solid rgb(191, 191, 191);
  :hover {
    cursor: pointer;
  }
`;

const DeleteConfirm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120%;
  color: #f37802;
  width: 100%;
  height: 30%;
  :hover {
    cursor: pointer;
  }
`;
