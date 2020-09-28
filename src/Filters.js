import React from 'react';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            minEta: '',
            maxEta: '',
            sesso: '',
            residenza: '',
            localizzazione: ''
        }

        this.initEntries = props.data;
        this.optionResidenza = [];
        this.optionLocalizzazione = [];

        this.initEntries.forEach(entry => {
            if (!this.optionResidenza.includes(entry.residenza))
                this.optionResidenza.push(entry.residenza)

            if (!this.optionLocalizzazione.includes(entry.localizzazione))
                this.optionLocalizzazione.push(entry.localizzazione)
            
            if (this.state.minEta === '' || this.state.minEta > entry.eta)
                this.state.minEta = entry.eta
            
            if (this.state.maxEta === '' || this.state.maxEta < entry.eta)
                this.state.maxEta = entry.eta
            
        })

        this.optionResidenza.sort()
        this.optionLocalizzazione.sort()
    }

    filterData = () => {

        const filter = (entry, columnToFilter, valueToFilter) => {
            return valueToFilter === '' || entry[columnToFilter] === valueToFilter
        } 

        const filterName = (entry) => {
            return entry.nome.includes(this.state.nome)
        }

        this.props.setData(this.initEntries.filter(e => {
            return (
                filterName(e) &&
                filter(e, "sesso", this.state.sesso) &&
                filter(e, "residenza", this.state.residenza) &&
                filter(e, "localizzazione", this.state.localizzazione) &&
                (e.eta >= this.state.minEta && e.eta <= this.state.maxEta )
            )
        }))
    }

    onchangeFilter = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.filterData)
    }

    render() {
        return (
            <div className="filters">
                <div>
                    <label htmlFor="nome">Nome e Cognome</label>
                    <input id="nome" type="text" name="nome" onChange={this.onchangeFilter} value={this.state.nome} />
                </div>

                <div>
                    <label htmlFor="min-eta">Età Minima</label>
                    <input id="min-eta" type="number" name="minEta" min="0" max="150" onChange={this.onchangeFilter} value={this.state.minEta} />
                    <label htmlFor="max-eta">Età Massima</label>
                    <input id="max-eta" type="number" name="maxEta" min="0" max="150" onChange={this.onchangeFilter} value={this.state.maxEta} />
                </div>

                <div>
                <label htmlFor="sesso">Sesso</label>
                <select id="sesso" name="sesso" onChange={this.onchangeFilter} value={this.state.sesso}>
                    <option value="">Tutti</option>
                    <option value="M">Maschi</option>
                    <option value="F">Femmine</option>
                </select>
                </div>

                <div>
                    <label htmlFor="residenza">Residenza</label>
                    <select id="residenza" name="residenza" onChange={this.onchangeFilter} value={this.state.residenza}>
                        <option value="">Tutti</option>
                        {this.optionResidenza.map(o => (
                            <option value={o}>{o}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="localizzazione">Localizzazione</label>
                    <select id="localizzazione" name="localizzazione" onChange={this.onchangeFilter} value={this.state.localizzazione}>
                        <option value="">Tutti</option>
                        {this.optionLocalizzazione.map(o => (
                            <option value={o}>{o}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}

export default Filters;
