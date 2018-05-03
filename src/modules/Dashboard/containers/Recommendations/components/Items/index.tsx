import * as React from 'react';

export const Items = (props: any) => (
    <div>
        <p>Recommendations: </p>
        {props.items.map((item: any, i: number) => <p key={item.id + i}>{item.message}</p>)}
    </div>
);
