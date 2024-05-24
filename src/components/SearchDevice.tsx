import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import StyledText from '@/src/components/StyledText'
import ItemDevice from '@/src/components/ItemDevice'
import devices from '@/src/data'

function SearchDevice() {
    return (
        <FlatList
            data={devices}
            ItemSeparatorComponent={
                () => {
                    return <View style={{ height: 10 }} />
                }
            }
            renderItem={({ item }) => {
                return <ItemDevice numberId={item.id} nameDevice={item.name} />
            }}
        />
    )
}

export default SearchDevice