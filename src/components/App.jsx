import { Section } from './Section/Section';
import { User } from './User/User';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions/Transactions';
import data from 'data/data';
import user from 'data/user';
import friends from 'data/friends';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <>
      <Section>
        <User
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload Stats" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <Transactions items={transactions} />
      </Section>
    </>
  );
};
