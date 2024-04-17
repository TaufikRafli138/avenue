import React, { useState } from 'react';
import { member } from "../../memberAvenue";

function MemberOption() {
    const [selectedMember, setSelectedMember] = useState('');

    const handleChange = (event) => {
        setSelectedMember(event.target.value);
    };

    return (
        <div style={{ marginBottom: 30 }}>
            {/* Select untuk memilih dari semua member */}
            <select
                className="form-control"
                value={selectedMember}
                onChange={(e) => handleChange(e, "all")}
                style={{ marginBottom: 20 }}
            >
                <option value="">Cheki All Member</option>
                {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>

            {/* Select untuk setiap member */}
            {Object.keys(member.dataMember).map((key) => (
                <select
                    key={key}
                    className="form-control"
                    value={selectedMember}
                    onChange={(e) => handleChange(e, key)}
                    style={{ marginBottom: 20 }}
                >
                    <option value="">Cheki with {member.dataMember[key].callsign}</option>
                    {[...Array(10)].map((_, index) => (
                        <option key={index} value={`${member.dataMember[key].callsign} - ${index + 1}`}>
                            {index + 1}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    );


}

export default MemberOption;
