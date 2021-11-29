import { NativeBaseProvider, Spinner } from 'native-base'
import React from 'react'

const Loading = () => {
    return (
        <NativeBaseProvider>
            <Spinner color="blue" />
          </NativeBaseProvider>
    )
}

export default Loading
