import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ItemDevice from '@/src/components/ItemDevice'
import devices from '@/src/data'

function SearchDevice() {
    return (
        <FlatList
            data={devices}
            ItemSeparatorComponent={
                () => {
                    return <View style={{ height: 4 }} />
                }
            }
            renderItem={({ item }) => {
                return <ItemDevice styel={styles.itemDevices} numberId={item.id} nameDevice={item.name} />
            }}
        />
    )
}

const styles = StyleSheet.create({
    itemDevices: {
        paddingBottom: 25,
    }
})

export default SearchDevice