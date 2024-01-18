from facebook_scraper import get_posts

def scrape_data():
    page_name = 'ShoqataKosovareeFizikes'
    email = 'ag.ali.01.01.2000@gmail.com'
    password = 'Agali1@?'

    num_pages = 2

    data_list = []

    for post in get_posts(page_name, pages=num_pages, credentials=(email, password)):
        post_data = {
            'title': post['text'][:50], 
            'date': post['time'],
            'text': post['text'],
            'image_urls': [post['image']] if post['image'] else [],
        }
        data_list.append(post_data)


    return data_list

def main():
    scraped_data = scrape_data()
    
    formatted_data = json.dumps(scraped_data, indent=4)
    print(formatted_data)

if __name__ == '__main__':
    main()
