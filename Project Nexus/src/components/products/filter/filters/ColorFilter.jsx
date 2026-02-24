export const ColorFilter = ({ onColorSelected, onColorDeselected }) => {
    const handleChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        
        if (isChecked) 
            onColorSelected(value);
        else 
            onColorDeselected(value);
    };

    return (
        <div>
            <div style={{ marginBottom: '8px' }}>Color:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="checkbox"
                        value="red"
                        onChange={handleChange}
                    />
                    Red
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="checkbox"
                        value="green"
                        onChange={handleChange}
                    />
                    Green
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="checkbox"
                        value="blue"
                        onChange={handleChange}
                    />
                    Blue
                </label>
            </div>
        </div>
    );
};

export default ColorFilter;