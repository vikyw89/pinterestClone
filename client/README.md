## Design

Pages:

- Landing page and login and register in /signIn
- Collection page in /pinned
- pinFeed in /pin
- zoomed in pin in /[pin_uid]

## Data Model

- users collection

  - user_account doc
    - doc_id from auth_uid
    - date_created
    - date_updated
    - profile_picture_url
    - boards
      - board
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
