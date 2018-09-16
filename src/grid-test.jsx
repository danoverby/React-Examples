import React from 'react';
import { css } from 'glamor';

export default function () {
 let grid = css({
   display: 'grid',
   gridTemplateColumns: '25% 25% auto'
 })

 let header = css({
   gridRow: 1,
   gridColumn: 'span 3',
   display: 'grid',
   gridTemplateColumns: '25% 25% 25% 25%',
   margin: '0 2.5% 2.5% 2.5%',
   backgroundColor: 'lightgray'
 });

 let logo = css({
  girdColumn: 1,
  width: '200px',
  height: '75px',
  backgroundColor: 'lightblue'
 })

 let title = css({
  gridColumn: '2 / 3',
  justifySelf: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '200px',
  height: '75px',
  backgroundColor: 'lightgreen'

 })

  return <div {...grid}>

    <div {...header}>
        <div {...logo}></div>
        <div {...title}>here</div>
    </div>

  </div>
}