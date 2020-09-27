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

        this.initDiamond = props.diamonds;
        console.log(this.initDiamond[0])
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


        this.props.setDiamonds(filteredDiamonds);
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
            <div className="form">
                <div className="multiselect-group border">
                    <div className="row expand" onClick={() => this.setState({ showColor: !this.state.showColor })} >
                        <label>Colore</label>
                        <span className="margin-left-span">
                            {this.state.showColor ? "-" : "+"}
                        </span>
                    </div>
                    {this.state.showColor &&
                        <div className="row">
                            <div className="col-1 col-sm-1">
                                {colorOptions.map(color => {
                                    let content;
                                    if (this.state.selectedColor.includes(color.value))
                                        content = (<button key={color.value} className="buttonSelected buttonFilter" onClick={() => this.handleSelectionColor(this.state.selectedColor.filter(o => o !== color.value))}>{color.label}</button>);
                                    else
                                        content = (<button key={color.value} className="buttonFilter" onClick={() => {
                                            let s = this.state.selectedColor;
                                            s.push(color.value)
                                            this.handleSelectionColor(s);
                                        }}>{color.label}</button>);

                                    return content;
                                })}
                            </div>
                        </div>
                    }
                </div>

                <div className="multiselect-group border">
                    <div className="row expand" onClick={() => this.setState({ showClarity: !this.state.showClarity })} >
                        <label>Purezza</label>
                        <span className="margin-left-span">
                            {this.state.showClarity ? "-" : "+"}
                        </span>
                    </div>
                    {this.state.showClarity &&
                        <div className="row">
                            <div className="col-1 col-sm-1">
                                {clarityOption.map(clarity => {
                                    let content;
                                    if (this.state.selectedClarity.includes(clarity.value))
                                        content = (<button key={clarity.value} className="buttonSelected buttonFilter" onClick={() => this.handleSelectionColor(this.state.handleSelectionClarity.filter(o => o !== clarity.value))}>{clarity.label}</button>);
                                    else
                                        content = (<button key={clarity.value} className="buttonFilter" onClick={() => {
                                            let s = this.state.selectedClarity;
                                            s.push(clarity.value)
                                            this.handleSelectionClarity(s);
                                        }}>{clarity.label}</button>);

                                    return content;
                                })}
                            </div>
                        </div>
                    }
                </div>

                <div className="others">
                    <div className="expand others-expand" onClick={() => this.setState({ showOthers: !this.state.showOthers })} >
                        <label>Altri</label>

                        <span className="margin-left-span">
                            {this.state.showOthers ? "-" : "+"}
                        </span>
                    </div>
                    {this.state.showOthers &&
                    <div className="gridrow">

                        <div className="multiselect-group border">
                            <div className="row expand">
                                <label>Taglio</label>
                            </div>
                            {this.state.showCut &&
                                <div className="row">
                                    <div className="col-1 col-sm-1">
                                        {cutOption.map(cut => {
                                            let content;
                                            if (this.state.selectedCut.includes(cut.value))
                                                content = (<button key={cut.value} className="buttonSelected buttonFilter" onClick={() => this.handleSelectionCut(this.state.selectedCut.filter(o => o !== cut.value))}>{cut.label}</button>);
                                            else
                                                content = (<button key={cut.value} className="buttonFilter" onClick={() => {
                                                    let s = this.state.selectedCut;
                                                    s.push(cut.value)
                                                    this.handleSelectionCut(s);
                                                }}>{cut.label}</button>);

                                            return content;
                                        })}
                                    </div>
                                </div>
                            }
                        </div>



                        <div className="multiselect-group border">
                            <div className="row expand">
                                <label>Simmetria</label>
                            </div>
                            {this.state.showSimmetry &&
                                <div className="row">
                                    <div className="col-1 col-sm-1">
                                        {simmetryOption.map(simmetry => {
                                            let content;
                                            if (this.state.selectedSimmetry.includes(simmetry.value))
                                                content = (<button key={simmetry.value} className="buttonSelected buttonFilter" onClick={() => this.handleSelectionSimmetry(this.state.selectedSimmetry.filter(o => o !== simmetry.value))}>{simmetry.label}</button>);
                                            else
                                                content = (<button key={simmetry.value} className="buttonFilter" onClick={() => {
                                                    let s = this.state.selectedSimmetry;
                                                    s.push(simmetry.value)
                                                    this.handleSelectionSimmetry(s);
                                                }}>{simmetry.label}</button>);

                                            return content;
                                        })}
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="multiselect-group border">
                            <div className="row expand" >
                                <label>Polish</label>
                            </div>
                            {this.state.showPolish &&
                                <div className="row">
                                    <div className="col-1 col-sm-1">
                                        {polishOption.map(polish => {
                                            let content;
                                            if (this.state.selectedPolish.includes(polish.value))
                                                content = (<button key={polish.value} className="buttonSelected buttonFilter" onClick={() => this.handleSelectionPolish(this.state.selectedPolish.filter(o => o !== polish.value))}>{polish.label}</button>);
                                            else
                                                content = (<button key={polish.value} className="buttonFilter" onClick={() => {
                                                    let s = this.state.selectedPolish;
                                                    s.push(polish.value)
                                                    this.handleSelectionPolish(s);
                                                }}>{polish.label}</button>);

                                            return content;
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    }

                </div>
                <div className="numbersContainer">
                    <div className="multiselect-group container price">
                        <label>Prezzo</label>
                        <div className="row">
                            <div className="col num-input">
                                <span className="num-input-span" >Da</span><NumericInput min={0} className="numeric-input padding-input" onChange={this.changeMin} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col num-input">
                                <span className="num-input-span a-span" >A</span><NumericInput min={0} className="numeric-input padding-input" onChange={this.changeMax} />
                            </div>
                        </div>
                    </div>

                    <div className="multiselect-group container carat">
                        <label>Carati</label>
                        <div className="row">
                            <div className="col num-input">
                                <span className="num-input-span" >Da</span><NumericInput min={0} step="0.01" className="numeric-input padding-input" onChange={this.changeCarMin} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col num-input">
                                <span className="num-input-span a-span" >A</span><NumericInput min={0} step="0.01" className="numeric-input padding-input" onChange={this.changeCarMax} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Filters;
