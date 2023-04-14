## Design

Pages:

- Landing page and login and register in /signIn
  - header
  - footer
  - sidebar
  - tagline
- User account page /account
  - header
  - profile
  - change password
  - log out
  - footer
- Collection page in /user_id
  - header
  - board folder with thumbnail
  - footer
- Inside board /board/[board_name]
  - pin cards
- PinFeed in /
  - pin cards in infinite scroll
- Zoomed in pin /pin/[pin_uid]
  - comment

Components:

- header
  - search
- footer
-

## Data Model

- users collection

  - user_account doc
    - doc_id from auth_uid
    - date_created
    - date_updated
    - profile_picture_url
    - boards map
      - board name array
        - pin_doc_id

- pins collection
  - pin doc
    - doc_id
    - date_created
    - date_updated
    - author_uid
    - description
    - media_url
    - link_url
    - pinners array
      - user_account_doc_id
    - comments array
      - author_doc_id
      - date_created
      - date_updated
      - text_content
