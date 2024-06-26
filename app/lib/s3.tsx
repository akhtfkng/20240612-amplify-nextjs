import { list } from 'aws-amplify/storage';

const ListProps = async() => {
    const result = await list({
        path: 'test/'
    });
    return (
      <ul>
        {result.items.length}
      </ul>
    )
}
  
export default ListProps;