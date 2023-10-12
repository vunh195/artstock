import React from 'react';
import { Wrapper } from './Menu.styled';
import { onMoveAnimation } from 'services/hooks/useDevelopUI';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom';
export const MenuForm = () => {
  const history = useHistory();
  return (
    <Wrapper id="menu-modal-ov" className="menu-modal">
      <div
        className="overlay"
        onClick={() => {
          onMoveAnimation('menu-modal-ov', 'moveOutOpacity');
        }}
      ></div>
      <div className="setting-form">
        <div className="setting-title">
          <div className="title">Menu</div>
          <div
            className="btn-close"
            onClick={() => {
              onMoveAnimation('menu-modal-ov', 'moveOutOpacity');
            }}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="border"></div>
        {/* <div
          className="menu-nav"
          onClick={() => {
            history.push('/');
          }}
        >
          Home
        </div>
        <div
          className="menu-nav"
          onClick={() => {
            history.push('/swap');
            onMoveAnimation('menu-modal-ov', 'moveOutOpacity');
          }}
        >
          Swap
        </div>
        <div
          className="menu-nav"
          onClick={() => {
            history.push('/liquidity');
            onMoveAnimation('menu-modal-ov', 'moveOutOpacity');
          }}
        >
          Liquidity
        </div> */}
      </div>
    </Wrapper>
  );
};

export default MenuForm;
