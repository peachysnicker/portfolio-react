// Page Headers will be generated with the page data for title and description

const PageHeader = ({ title, description }) => (
  <div>
    <p className="pageDescription">{description}</p>
    <h3 className="pageTitle">{title}</h3>
  </div>
);

export default PageHeader;
