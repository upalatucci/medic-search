import React from 'react';
// import MultiSelect from "@khanacademy/react-multi-select";
import NumericInput from 'react-numeric-input';

const cutOption = [
    { label: "EXCELLENT", value: "EXCELLENT" },
    { label: "VERY GOOD", value: "VERY GOOD" },
    { label: "GOOD", value: "GOOD" },
    { label: "IDEAL", value: "IDEAL" }
]
const simmetryOption = [
    { label: "EXCELLENT", value: "EXCELLENT" },
    { label: "VERY GOOD", value: "VERY GOOD" },
    { label: "GOOD", value: "GOOD" },
    { label: "FAIR", value: "FAIR" }
]
const polishOption = [
    { label: "EXCELLENT", value: "EXCELLENT" },
    { label: "VERY GOOD", value: "VERY GOOD" },
    { label: "GOOD", value: "GOOD" },
    { label: "FAIR", value: "FAIR" }
]

const colorOptions = [
    { label: "D", value: "D" },
    { label: "E", value: "E" },
    { label: "F", value: "F" },
    { label: "G", value: "G" },
    { label: "H", value: "H" },
    { label: "I", value: "I" },
    { label: "J", value: "J" },
    { label: "K", value: "K" },
    { label: "L/M", value: "L/M" },
    { label: "Fancy", value: "Fancy" },
];

const clarityOption = [
    { label: "FL", value: "FL" },
    { label: "IF", value: "IF" },
    { label: "VVS1", value: "VVS1" },
    { label: "VVS2", value: "VVS2" },
    { label: "VS1", value: "VS1" },
    { label: "VS2", value: "VS2" },
    { label: "SI1", value: "SI1" },
    { label: "SI2", value: "SI2" },
    { label: "SI3", value: "SI3" },
    { label: "I1", value: "I1" },
];

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedShape: [],
            selectedColor: [],
            selectedClarity: [],
            selectedCut: [],
            selectedSimmetry: [],
            selectedPolish: [],
            selectedFluo: [],
            min: 0,
            max: -1,
            carMin: 0,
            carMax: -1,
            showColor: true,
            showClarity: true,
            showCut: true,
            showSimmetry: true,
            showPolish: true,
            showFluo: true,
            showOthers: true,
        }

        this.initDiamond = props.data;
    }
    filterData = () => {
        let filteredDiamonds = this.initDiamond;
        const { selectedShape, selectedColor, selectedClarity, selectedCut, selectedSimmetry, selectedFluo, selectedPolish, max, min, carMin, carMax } = this.state;

        console.log(selectedShape)
        if (selectedShape && selectedShape.length > 0)
            filteredDiamonds = filteredDiamonds.filter(o => selectedShape.includes(o.Shape));

        if (selectedColor && selectedColor.length > 0) {
            filteredDiamonds = filteredDiamonds.filter(o => selectedColor.includes(o.Color));
        }

        if (selectedClarity && selectedClarity.length > 0) {
            filteredDiamonds = filteredDiamonds.filter(o => selectedClarity.includes(o.Clarity));
        }
        if (selectedCut && selectedCut.length > 0) {
            filteredDiamonds = filteredDiamonds.filter(o => selectedCut.includes(o.Cut));
        }
        if (selectedPolish && selectedPolish.length > 0) {
            filteredDiamonds = filteredDiamonds.filter(o => selectedPolish.includes(o.Polish));
        }
        if (selectedSimmetry && selectedSimmetry.length > 0) {
            filteredDiamonds = filteredDiamonds.filter(o => selectedSimmetry.includes(o.Symmetry));
        }
        if (selectedFluo && selectedFluo.length > 0) {
            filteredDiamonds = filteredDiamonds.filter(o => selectedFluo.includes(o.Fluor));
        }

        if (max !== -1 && max !== 0 && !isNaN(max)) {
            filteredDiamonds = filteredDiamonds.filter(o => Number(o["Total Price"]) <= max);
        }

        if (min !== 0 && !isNaN(min)) {
            filteredDiamonds = filteredDiamonds.filter(o => Number(o["Total Price"]) >= min);
        }

        if (carMin !== 0 && !isNaN(carMin)) {
            filteredDiamonds = filteredDiamonds.filter(o => Number(o["Weight"]) >= carMin);
        }

        if (carMax !== -1 && carMax !== 0 && !isNaN(carMax)) {
            filteredDiamonds = filteredDiamonds.filter(o => Number(o["Weight"]) <= carMax);
        }


        this.props.setData(filteredDiamonds);
    }

    handleSelectionShape = (selectedShape) => {
        this.setState({ selectedShape }, this.filterData);
    }
    handleSelectionColor = (selectedColor) => {
        this.setState({ selectedColor }, this.filterData);
    }
    handleSelectionClarity = (selectedClarity) => {
        this.setState({ selectedClarity }, this.filterData);
    }
    handleSelectionCut = (selectedCut) => {
        this.setState({ selectedCut }, this.filterData);
    }
    handleSelectionSimmetry = (selectedSimmetry) => {
        this.setState({ selectedSimmetry }, this.filterData);
    }
    handleSelectionPolish = (selectedPolish) => {
        this.setState({ selectedPolish }, this.filterData);
    }
    handleSelectionFluo = (selectedFluo) => {
        this.setState({ selectedFluo }, this.filterData);
    }

    changeMax = (max) => {
        if (max !== "")
            this.setState({ max: Number(max) }, this.filterData);
        else
            this.setState({ max: -1 }, this.filterData)
    }

    changeMin = (min) => {
        if (min !== "")
            this.setState({ min: Number(min) }, this.filterData);
        else
            this.setState({ min: 0 }, this.filterData)
    }

    changeCarMax = (carMax) => {
        if (carMax !== "")
            this.setState({ carMax: Number(carMax) }, this.filterData);
        else
            this.setState({ carMax: -1 }, this.filterData)
    }

    changCareMin = (carMin) => {
        if (carMin !== "")
            this.setState({ carMin: Number(carMin) }, this.filterData);
        else
            this.setState({ carMin: 0 }, this.filterData)
    }

    render() {
        return (
            <div>
                <label htmlFor="nome">Nome e Cognome</label>
                <input id="nome" type="text" name="nome"/>

                <label htmlFor="min-eta">Età Minima</label>
                <input id="min-eta" type="range" min="0" max="200"/>
                <label htmlFor="max-eta">Età Massima</label>
                <input id="max-eta" type="range" min="0" max="200"/>
            </div>
        )
    }
}

export default Filters;
