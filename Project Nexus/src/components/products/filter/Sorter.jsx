export const Sorter = ({ onSortOptionSelected }) => {
    const handleChange = (event) => {
        onSortOptionSelected(event.target.value);
    };

    return (
        <div>
            <div style={{ marginBottom: '8px' }}>Sort by:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="radio"
                        name="sortOption"
                        value="A-Z"
                        onChange={handleChange}
                    />
                    Alphabetical (A–Z)
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="radio"
                        name="sortOption"
                        value="Z-A"
                        onChange={handleChange}
                    />
                    Alphabetical (Z–A)
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="radio"
                        name="sortOption"
                        value="0-1"
                        onChange={handleChange}
                    />
                    Price (Low to High)
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="radio"
                        name="sortOption"
                        value="1-0"
                        onChange={handleChange}
                    />
                    Price (High to Low)
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="radio"
                        name="sortOption"
                        value="R+"
                        onChange={handleChange}
                    />
                    Rating (Low to High)
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="radio"
                        name="sortOption"
                        value="R-"
                        onChange={handleChange}
                    />
                    Rating (High to Low)
                </label>
            </div>
        </div>
    );
};

export default Sorter;