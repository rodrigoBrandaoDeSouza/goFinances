import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles'

export interface DataListProps extends TransactionCardProps{
    id :number
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: 1,
            type : 'positive',
            title: 'Venda',
            amount: 'R$ 3.000,00',
            category: {
                name: 'Entradas',
                icon: 'dollar-sign'
            },
            date: '21/01/1995'
        },
        {
            id: 2,
            type : 'negative',
            title: 'Alimentação',
            amount: 'R$ 1.000,00',
            category: {
                name: 'Fixas',
                icon: 'coffee'
            },
            date: '21/01/1995'
        }, 
        {
            id: 3,
            type : 'positive',
            title: 'Desenvolvimento de Site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'shopping-bag'
            },
            date: '21/01/1995'
        },
        {
            id: 4,
            type : 'positive',
            title: 'Desenvolvimento de Site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: '21/01/1995'
        }, 
        {
            id: 5,
            type : 'negative',
            title: 'Desenvolvimento de Site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: '21/01/1995'
        }
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/rBrandaoSouza.png' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Rodrigo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard
                    tittle="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction='ultima Entrada dia 13 de abril'
                    type='up'
                />
                <HighlightCard
                    tittle="Saidas"
                    amount="R$ 1.259,00"
                    lastTransaction='ultima Entrada dia 13 de abril'
                    type='down'
                />
                <HighlightCard
                    tittle="Total"
                    amount="R$ 17.400,00"
                    lastTransaction='ultima Entrada dia 13 de abril'
                    type='total'
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}

                />

            </Transactions>

        </Container>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})