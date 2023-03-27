import "./Menubar.css";

const Menubar = () => {
  return (
    <div>
      <article className="heading">Add new Property</article>
      <article className="menubar">
        <span >
          <span >1</span> BasicInfo
        </span>
        <span >
          <span>2</span>Property
          Detail
        </span>
        <span >
          <span>3</span>General Info
        </span>
        <span >
          <span >4</span>Location Info
        </span>
      </article>
    </div>
  );
};
export default Menubar;
