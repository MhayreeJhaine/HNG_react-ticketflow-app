const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p>
        &copy; {new Date().getFullYear()} Ticket Manager. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
