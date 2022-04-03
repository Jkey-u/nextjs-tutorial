import { useRouter } from "next/router";
import { Menu } from 'semantic-ui-react';

export default function Gnb() {
    const router = useRouter();
    // console.log(router);
    let activeItem;

    if(router.pathname === '/') {
      activeItem = 'home';
    } else if(router.pathname === '/about') {
      activeItem = 'about';
    }

    const goLink = (e, data) => {
      if(data.name === 'home') {
        router.push('/');
      } else if(data.name === 'about') {
        router.push('/about');
        // location.href = '/about'; 페이지 리로드된다는 단점
      }
    }
    
    return(
      <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={goLink}
        />
      </Menu>
    );
}