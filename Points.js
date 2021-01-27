import React from 'react';
import tpoint from '../date.json';
import {Table, TableRow} from "semantic-ui-react";

function Points() {
    
    const sorted = tpoint.sort((a,b) => b.tpoints-a.tpoints);
    return(
        <div className = "Pointss">
        <Table size="large" color="blue" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Team Name</Table.HeaderCell>
            <Table.HeaderCell>Team Matches</Table.HeaderCell>
            <Table.HeaderCell>Team Wins</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
            <Table.HeaderCell>Percentage</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>                  
           { sorted.map((p,i) =>{
                return (
                    <Table.Row>
                        <Table.Cell>{p.tname}</Table.Cell>
                        <Table.Cell>{p.matches}</Table.Cell>
                        <Table.Cell>{p.wins}</Table.Cell>
                        <Table.Cell>{p.tpoints}</Table.Cell>
                        <Table.Cell>{(p.wins/p.matches)*100}%</Table.Cell>
                    </Table.Row>
                
           )})}
        </Table.Body>
        </Table>
        </div>
    )
   
        

}

export default Points;