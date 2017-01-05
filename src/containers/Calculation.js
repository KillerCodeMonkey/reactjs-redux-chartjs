import { connect } from 'react-redux';
import Chart from '../components/Chart';

const getData = ({costs, incomes, savings}) => {
    return {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            type: "line",
            label: 'Saving Goal',
            fill: false,
            data: ["20000", "20000", "20000", "20000", "20000", "20000", "20000", "20000", "20000", "20000"],
            borderColor: 'rgba(54, 54, 54, 0.6)',
            backgroundColor: 'rgba(54, 54, 54, 1)'
        }, {
            type: "line",
            label: 'Savings',
            fill: false,
            data: savings,
            borderColor: 'rgba(22, 115, 143, 0.8)',
            backgroundColor: 'rgba(22, 115, 143, 1)'
        }, {
            label: 'Income',
            data: incomes,
            backgroundColor: incomes.map(() => {
                return 'rgba(154, 205, 50, 0.6)'
            }),
            borderColor: incomes.map(() => {
                return 'rgba(154, 205, 50, 1)'
            }),
            borderWidth: 1
        }, {
            label: 'Costs',
            fill: false,
            data: costs,
            backgroundColor: costs.map(() => {
                return 'rgba(255, 69, 0, 0.6)'
            }),
            borderColor: costs.map(() => {
                return 'rgba(255, 69, 132, 1)'
            }),
            borderWidth: 1
        }]
    }
};

const mapStateToProps = (state, ownProps) => ({
  data: getData(state),
  type: "bar",
  width: "40%"
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const Calculation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);

export default Calculation;
