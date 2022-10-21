const HomePageItem = ({ message, link }) => {
  return (
    <div className="homepage-item">
      <h1>{message}</h1>
      <img className="homepage-item-img" src={link} alt="" />
    </div>
  );
};

export default HomePageItem;
