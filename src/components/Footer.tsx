interface IFooter {
  author: string;
  year: number;
}

const Footer = ({ author, year }: IFooter) => {
  return (
    <footer>
      <p> Copyright {author} {year}</p>
    </footer>
  );
};

export default Footer;
