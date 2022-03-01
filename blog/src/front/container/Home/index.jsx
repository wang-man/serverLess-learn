import { useState, useEffect } from 'react';
import request from '../../../common/request';
import { parseJsonByString } from '../../../common/utils';
import { Helmet } from 'react-helmet';
import Banner from './component/Banner';
import Footer from './component/Footer';
import List from './component/List';

const map = { Footer, Banner, List };

const render = (index, item) => {
  const Component = map[item.name];
  return Component ? <Component key={index} schema={item} /> : null;
}

const Home = () => {
  const [pageSchema, setPageSchema] = useState({});
  const { children = [], attributes = {} } = pageSchema;

  useEffect(() => {
    request.get('http://bloghttpservice-get.serverless-blog.1110945173298580.cn-hangzhou.fc.devsapp.net/api/schema/getLast').then((response) => {
      const data = response?.data;
      data && setPageSchema(parseJsonByString(data.schema, {}));
    });
  }, [])

  return (
    <div className='wrapper'>
      <Helmet>
        <title>{attributes?.title || ''}</title>
      </Helmet>
      {children.length ? children.map((item, index) => render(index, item)) : <h1 className='error-title'>请在后台编辑博客模块</h1>}
    </div>
  );
}

export default Home;