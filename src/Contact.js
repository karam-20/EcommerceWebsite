import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 6rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 40rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    .common-heading {
      font-size: 30px;
    }
    .contact-submit {
      font-size: 15px;
      margin-top: -6px;
      padding: 13px 5px;
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.3854919179785!2d78.25968211497887!3d26.020940083519715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976de6e2cd33583%3A0xcadb08fbf8b66e1f!2sRustamji%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1671171018833!5m2!1sen!2sin"
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullsSreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" action="" method="POST">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            ></input>
            <input
              type="email"
              placeholder="email"
              name="email"
              required
              autoComplete="off"
            ></input>
            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="5"
              required
              autoComplete="off"
            ></textarea>
            <input
              className="contact-submit"
              type="submit"
              value="send"
            ></input>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
