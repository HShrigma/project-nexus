import {Sorter} from "./Sorter";

export const Filter = ({minPrice, maxPrice, onSortOptionSelected}) => {
    return (
        <div>
            This is a filter
            <div>
                Filter on:
                <div> Color: 
                    <button>red</button>
                    <button>green</button>
                    <button>blue</button>
                </div>
                <div> Price </div>
                <div> Price Min: {minPrice}</div>
                <div> Price Max: {maxPrice}</div>
            </div>
            <Sorter onSortOptionSelected={onSortOptionSelected} />
        </div>);
}
export default Filter;