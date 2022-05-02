import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
// import { VESSEL_WAFER_RATIO, VESSEL_WAFER_MAX_HEIGHT, VESSEL_WAFER_GAP, VESSEL_WAFER_MAX_SIZE } from '../../utils/constants';

export default function Wafers (props) {

    const [CurrentVesselID, setCurrentVesselId] = useState(1);
    const [width, setWidth] = useState("70px");
    const [height, setHeight] = useState("50px");
    // var calculateDRect = {};
    // if (props.width * VESSEL_WAFER_RATIO > VESSEL_WAFER_MAX_HEIGHT) {
    //     calculateDRect.height = VESSEL_WAFER_MAX_HEIGHT;
    //     calculateDRect.width = calculateDRect.height / VESSEL_WAFER_RATIO;
    // } else {
    //     calculateDRect.width = props.width;
    //     calculateDRect.height = props.width * VESSEL_WAFER_RATIO;
    // }
    // const [selected, setSelected] = useState(false);
    // const max_radius = calculateDRect.height - VESSEL_WAFER_GAP;
    // const [width, setWidth] = useState(props.width);
    // const [size, setSize] = useState(props.size);
    // const [rect, setRect] = useState(calculateDRect);
    // const [radious, setRadious] = useState(props.size > VESSEL_WAFER_MAX_SIZE
    //     ? max_radius
    //     : Math.abs(Math.ceil(props.size * max_radius) / VESSEL_WAFER_MAX_SIZE));
    useEffect(() => {
        if ( props.width !== undefined ) {
            setWidth(props.width);
        }
        if ( props.height !== undefined ) {
            setHeight(props.height);
        }
        if (props.vessel !== undefined && props.vessel.id !== undefined) {
            setCurrentVesselId(props.vessel.id);
        }
        // if (width !== props.width || size !== props.size) {

        //     if (props.width * VESSEL_WAFER_RATIO > VESSEL_WAFER_MAX_HEIGHT) {
        //         calculateDRect.height = VESSEL_WAFER_MAX_HEIGHT;
        //         calculateDRect.width = calculateDRect.height / VESSEL_WAFER_RATIO;
        //     } else {
        //         calculateDRect.width = props.width;
        //         calculateDRect.height = props.width * VESSEL_WAFER_RATIO;
        //     }
        //     const max_radius = calculateDRect.height - VESSEL_WAFER_GAP;
        //     setWidth(props.width);
        //     setSize(props.size);
        //     setRect(calculateDRect);
        //     setRadious(props.size > VESSEL_WAFER_MAX_SIZE
        //         ? max_radius
        //         : Math.abs(Math.ceil(props.size * max_radius) / VESSEL_WAFER_MAX_SIZE));
        // }
    }, [props]);
    // const renderDishes = () => {
    //     return (
    //         <div style={{ width: rect.width, height: rect.height }} className="border border-dark rounded-0 d-flex flex-column justify-content-center align-items-center">
    //             <div style={{ width: radious, height: radious }} className={'border border-dark rounded-circle wafer-box ' + (selected ? 'selected' : '')} onClick={() => {setSelected(!selected)}}>

    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="btn-group" role="group">
            {
            CurrentVesselID === 13 && <div className="btn btn-md" type="button" style={{ boxShadow: "none"}}>
                <Image style={{ margin: '0 auto', width: width, height: height }} src={"../assets/images/150wafer.png"} alt='no image' />
            </div>
        }
        {
            CurrentVesselID === 14 && <div className="btn btn-md" type="button" style={{ boxShadow: "none"}}>
                <Image style={{ margin: '0 auto', width: width, height: height }} src={require("../assets/images/200wafer.png")} alt='no image' />
            </div>
        }
        {
            CurrentVesselID === 15 && <div className="btn btn-md" style={{ boxShadow: "none"}}>
                <Image style={{ margin: '0 auto', width: width, height: height }} src={"../assets/images/300wafer.png"} alt='no image' />
            </div>
        }
        </div>
    );
}