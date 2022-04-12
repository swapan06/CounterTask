import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../Home/styles'
import actions from '../../redux/actions';
import { useSelector } from 'react-redux';


const Home = () => {
    const output = useSelector(state => state.num)

    const onIncrement = () => {
        actions.increment(output)
    }
    const onDecrement = () => {
        actions.decrement(output)
    }

    return (
        <View style={styles.container}>
            <View style={styles.btn}>
                <Button color={'white'}
                    title='Incremnet'
                    onPress={onIncrement} />
            </View>
            <Text style={styles.count}>{output}</Text>
            <View style={styles.btn2}>
                <Button color={'white'}
                    title='Decrement'
                    onPress={onDecrement} />
            </View>
        </View>

    )
}

export default Home