import { useState } from 'react';
import Wrapper from '../ui/components/Wrapper';
import { PageProps } from '../types/props';
import { FC } from 'react';

const Contact: FC<PageProps> = ({ themeStyles }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
    // Call your toast function here
  };

  return (
    <Wrapper themeStyles={themeStyles}>
      <h1 className={themeStyles.heading}>CONTACT</h1>
      <form className={themeStyles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

export default Contact;