import { FC } from 'react';
import { PageProps } from '../../types/props';

const Footer: FC<PageProps> = ({ themeStyles }) => {
  return (
    <footer className={themeStyles.footer}>
      <div className={themeStyles.footerWrapper}>
        <p>
          &copy; {new Date().getFullYear()} Greedy Little Pigs. All rights reserved.
        </p>
        <nav>
          <ul>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </nav>
        <div className={themeStyles.socials}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
