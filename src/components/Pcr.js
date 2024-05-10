import React from 'react';
import { useState } from "react";
import ActionMenu from './ActionMenu';

const Pcr = ({ }) => {
    const [active, setActive] = useState();
    return <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <ActionMenu
            setActive={setActive}
        />
        <div>{active || "select"}</div>
    </div >
}

export default Pcr