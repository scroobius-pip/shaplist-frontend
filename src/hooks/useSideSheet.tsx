import { BACKGROUND } from 'config/colors'
import { FolderCloseIcon, IconButton, SideSheet, Pane, CrossIcon, majorScale } from 'evergreen-ui'
import React, { useState } from 'react'



function useSideSheet<ComponentProps>(Component: (props: ComponentProps) => React.ReactElement) {
    const [componentProps, setComponentProps] = useState<ComponentProps>()
    const [isShown, setIsShown] = useState(false)

    const toggleVisible = (visible: boolean, componentProps: ComponentProps) => {
        setComponentProps(componentProps)
        setIsShown(visible)
    }
    const WrappedComponent = () => <>
        <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}
            containerProps={{
                width: '100%',
                height: '100%',

            }}
        >
            <Pane overflow='auto' padding={'2vw'} background={BACKGROUND} height='100%'>
                <Pane width='100%' marginBottom={majorScale(2)}>
                    <IconButton icon={CrossIcon} onClick={() => setIsShown(false)} />
                </Pane>
                {componentProps && <Component {...(componentProps)} />}
            </Pane>
        </SideSheet>
    </>

    return {
        toggleVisible,
        WrappedComponent
    }
}

export default useSideSheet