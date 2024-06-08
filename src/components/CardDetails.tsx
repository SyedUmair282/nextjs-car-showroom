import { carType } from '@/types';
import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface Iprop{
    isOpen: boolean;
    closeModal: () => void;
    carData: carType;
}
const CardDetails:React.FC<Iprop> = ({isOpen,closeModal,carData}) => {

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className='card-detail__header'>
            <Image src="/car.png" alt="pic" fill objectFit='contain'/>
        </div>
      </DialogTitle>
      <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[100],
            backgroundColor:(theme) => theme.palette.grey[500],
            '&:hover': {
                backgroundColor:(theme) => theme.palette.grey[500]
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
            <div>
                <span style={{fontSize:"20px",fontWeight:"bold",color:"black"}}>{carData.make} {carData.model}</span>
                <div className='card-detail__content'>
                    <span>Year</span>
                    <span style={{color:"black",fontWeight:"bold"}}>{carData.year}</span>
                </div>
                <div className="card-detail__content">
                    <span>Color</span>
                    <span style={{color:"black",fontWeight:"bold"}}>{carData.color}</span>
                </div>
                <div className="card-detail__content">
                    <span>Mileage</span>
                    <span style={{color:"black",fontWeight:"bold"}}>{carData.mileage}</span>
                </div>
                <div className="card-detail__content">
                    <span>Price</span>
                    <span style={{color:"black",fontWeight:"bold"}}>{carData.price}</span>
                </div>
                <div className="card-detail__content">
                    <span>Fuel Type</span>
                    <span style={{color:"black",fontWeight:"bold"}}>{carData.fuelType}</span>
                </div>
                <div className="card-detail__content">
                    <span>Transmission</span>
                    <span style={{color:"black",fontWeight:"bold"}}>{carData.transmission}</span>
                </div>
                <div className="card-detail__content">
                    <span>Hoursepower</span>
                    <span style={{color:"black",fontWeight:"bold"}}>{carData.horsepower}</span>
                </div>
                <div className="card-detail__content">
                    <span>Engine</span>
                    <span style={{color:"black",fontWeight:"bold"}}>{carData.engine}</span>
                </div>

            </div>
        </DialogContentText>
      </DialogContent>      
    </Dialog>
  );
}

export default CardDetails