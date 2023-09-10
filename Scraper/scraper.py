from selenium import webdriver
#from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from bs4 import BeautifulSoup
import time
import json
import html
import logging

# Get the Selenium logger
selenium_logger = logging.getLogger('selenium')
selenium_logger.setLevel(logging.CRITICAL)

# Chrome options
chrome_options = Options()
#chrome_options.add_argument("--headless")
#chrome_options.add_argument("--disable-gpu")

def driver_open(url):
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(url)
    
    time.sleep(2)


    close_buttons = driver.find_elements(By.CSS_SELECTOR, '.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.xi112ho.x17zwfj4.x585lrc.x1403ito.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xn6708d.x1ye3gou.x1qhmfi1.x1r1pt67')
    ActionChains(driver).move_to_element(close_buttons[4]).click().perform()
    
    time.sleep(2)
    
    driver.execute_script("window.scrollTo(0, document.documentElement.scrollHeight);")
    time.sleep(2)
    
    see_more_buttons = driver.find_elements(By.XPATH, "//div[text()='See more']")
    for button in see_more_buttons:
        driver.execute_script("arguments[0].click();", button)
        time.sleep(1)

    time.sleep(2)

    return driver

def driver_open_login(url):
    driver = webdriver.Chrome(options=chrome_options)
    driver.get("https://www.facebook.com/login")

    time.sleep(2) 

    email_input = driver.find_element(By.ID, "email")
    email_input.send_keys("ag.ali.01.01.2000@gmail.com")

    password_input = driver.find_element(By.ID, "pass")
    password_input.send_keys("Agali1@?")

    login_button = driver.find_element(By.NAME, "login")
    login_button.click()

    time.sleep(3)  

    page_url = "https://www.facebook.com/ShoqataKosovareeFizikes"
    driver.get(url)
    time.sleep(4)

    return driver

def driver_open_mbasic(url):
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(url)

    time.sleep(2)

    ul_element = driver.find_element(By.CLASS_NAME, "ba")
    li_elements = ul_element.find_elements(By.CLASS_NAME, "bb")

    email_label_element = li_elements[0].find_element(By.CLASS_NAME, "bd")
    email_input_element = li_elements[0].find_element(By.ID, "m_login_email")
    password_label_element = li_elements[1].find_element(By.CLASS_NAME, "bd")
    password_input_element = li_elements[1].find_element(By.CSS_SELECTOR, "section input")
    login_button_element = li_elements[2].find_element(By.CSS_SELECTOR, "input[name='login']")

    email_input_element.send_keys("ag.ali.01.01.2000@gmail.com")
    password_input_element.send_keys("Agali1@?")
    login_button_element.click()

    time.sleep(4)

    return driver

def driver_get_image_url(driver, url):
    driver.get(url)
    time.sleep(2)
    img_url = driver.find_element(By.TAG_NAME, 'img').get_attribute('src')
    return img_url

def driver_get_rendered_html(driver, url):
    rendered_html = driver.page_source
    decoded_html = html.unescape(rendered_html)

    return decoded_html

def driver_get_dates(url):
    driver = driver_open_mbasic(url)
    html = driver_get_rendered_html(driver, url)
    soup = BeautifulSoup(html, "html.parser")
    dates_div = soup.find_all('abbr')
    dates = [div.get_text(strip=True) for div in dates_div] if dates_div else ''
    driver_close(driver)

    return dates

def driver_close(driver):
    driver.quit()

def soup_find_all_blocks(soup):
    return soup.find_all('div', class_='x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z')

def block_find_all_tags_a(block):
    return block.find_all('a', href=lambda href: href.startswith('https://www.facebook.com/'))

def block_find_all_tags_text(block):
    return block.find_all('div', {'dir': 'auto', 'style': 'text-align: start;'})

def block_get_images(driver, block):
    image_urls = []
    a_tags = block_find_all_tags_a(block)
    for a_tag in a_tags:
        if tag_contain_img(a_tag):
            img_link = a_tag.get('href')                # Extract URL
            img_url = driver_get_image_url(driver, img_link)    # Extract IMG_URL
            image_urls.append(img_url)

    return image_urls

def block_get_text(block):
    text_tags = block_find_all_tags_text(block)
    title = ''
    text = ''
    get_title = True
    for div in text_tags:
        div_text = div.get_text(strip=True)
        text += div_text + "\n\n"
        if get_title:
            if '.' in div_text:
                title = div_text.split('.', 1)[0]  # Extract text until the first period
                get_title = False
            else:
                title = div_text
                get_title = False

    return [text, title]

def image_format(img_urls):
    for i in range(len(img_urls)):
        img_urls[i] = f'<div class="video" style="background-image: url({img_urls[i]});"></div>'

def tag_contain_img(a_tag):
    img_tag = a_tag.find('img', src=lambda src: src.startswith('https://scontent.fprn3-1.fna.fbcdn.net/'))
    if img_tag:
        return True
    else:
        return False

def html_parse_1(url_html, url_dates):
    driver = driver_open(url_html)
    html = driver_get_rendered_html(driver, url_html)
    soup = BeautifulSoup(html, "html.parser")

    blocks = soup_find_all_blocks(soup)
    dates = driver_get_dates(url_dates)

    data_list = []

    for block in blocks:
        [text, title] = block_get_text(block)
        date = dates.pop(0) if dates else ''
        image_urls = block_get_images(driver, block)

        image_format(image_urls)
        block_data = {'title': title, 'date': date, 'text': text, 'image_urls': image_urls}
        data_list.append(block_data)

    driver_close(driver)

    return data_list

def html_parse_2(url_html):
    driver = driver_open_login(url_html)
    html = driver_get_rendered_html(driver, url_html)
    soup = BeautifulSoup(html, "html.parser")

    blocks = soup_find_all_blocks(soup)

    image_links = []
    for block in blocks:
        image_links += block_get_images(driver, block)

    driver_close(driver)

    return image_links

def blocks_print(block_list):
    print("lajmet_data: [")
    for data in block_list:
        print("{")
        for key, value in data.items():
            if key == 'image_urls':
                print(f"    {key}:[")
                for image in value:
                    print(f"        {image},")
                print(f'    ]')
            else:
                print(f"    {key}: {repr(value)},")
        print("},")
    print("],")

def images_print(images):
    print("main_photos: [")
    for link in images:
        print(f'    <div class="video" style="background-image: url({link});"></div>,')
    print("],")

def scrape_data():
    url_html_1 = "https://www.facebook.com/ShoqataKosovareeFizikes"
    url_html_1_mbasic = "https://mbasic.facebook.com/ShoqataKosovareeFizikes?v=timeline&lst=100003060756259%3A100064336016060%3A1689538294&eav=AfbNUJ4Jk6RnAoQLZlec6K9MIGBpXA6dzLREgnlkiNVbH0g3chNrvWM4o0ZxrL91YUg&paipv=0"
    url_html_2 = "https://www.facebook.com/profile.php?id=100090682083367"

    block_list = html_parse_1(url_html_1, url_html_1_mbasic)
    main_photos = html_parse_2(url_html_2)

    blocks_print(block_list)
    images_print(main_photos)


scrape_data()