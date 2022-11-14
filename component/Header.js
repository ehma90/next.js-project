import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 5
  return (
    <div>
      <h1 className={headerStyles.title}><span>WebDev</span>News</h1>
        <p className={headerStyles.description}>Keep up to date with the latest news</p>


        {/* How to create considtional styling */}
        {/* const x = 5 */}
      {/* <style jsx>
          {`
            .title{
                color: ${x < 3 ? 'red' : 'blue'}
            }
          `}
      </style> */}
    </div>
  );
}

export default Header;
