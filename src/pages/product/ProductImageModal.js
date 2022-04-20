import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ProductImageModal = () => {
  return (
    <div>
      <PhotoModal></PhotoModal>
    </div>
  );
};

export default ProductImageModal;
