import { useState } from 'react';
import Wrapper from '../ui/components/Wrapper';
import { PageProps } from '../types/props';
import { FC } from 'react';
import { useToast } from '../context/ToastContext';

const Contact: FC<PageProps> = ({ themeStyles }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { addToast } = useToast(); // Assuming you have a toast function available

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      addToast('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      addToast('Please enter a valid email address.', 'error');
      return;
    }

    // If all fields are valid, do something here
    addToast('Form submitted successfully!', 'success');

    setFormData({ name: '', email: '', message: '' });
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
