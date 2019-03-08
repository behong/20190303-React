import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


class Customer extends React.Component{

    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.brithday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.jobs}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;