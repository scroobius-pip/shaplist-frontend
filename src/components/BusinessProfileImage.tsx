import { Pane } from 'evergreen-ui';
import React from 'react';

export default function BusinessImage({ url }: { url: string }) {
    return (<Pane
        width='100%'
        height={'20vh'}
        maxHeight={300}
        backgroundPosition='center'
        backgroundSize='cover'
        background={`linear-gradient(to top, rgba(0,0,0,0) 15%, rgba(0,0,0,0.7)), url('${url}')`}
    />
    );
}
