import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Info() {
    return(
        <>
        <Head>
            <title>Forest Sound Viz</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <div className={styles.center}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut semper sem. Phasellus a porttitor diam. Etiam ultricies consequat porta. Nulla id nunc elit. Nunc egestas, ex vitae molestie malesuada, mauris orci pretium nibh, eu commodo mauris urna eu diam. Suspendisse suscipit augue quis ultricies bibendum. Donec porttitor arcu vitae tempus sodales. Pellentesque dolor risus, porttitor ut orci quis, tincidunt scelerisque nunc.

In ornare rutrum interdum. In ac lectus semper, lobortis erat at, faucibus metus. Curabitur felis eros, bibendum eget velit quis, mollis viverra tellus. Morbi cursus, turpis in aliquam cursus, felis quam vestibulum tellus, sed imperdiet nibh odio et ex. Morbi metus sapien, fringilla eget aliquet sit amet, pretium euismod enim. Curabitur vehicula, lacus blandit fringilla aliquam, enim dui auctor neque, eget tincidunt sapien erat sit amet purus. Fusce venenatis, elit eget gravida sodales, arcu lectus viverra ipsum, a tincidunt ligula lacus non sapien. Fusce quis mattis erat. Morbi ac ante justo. Quisque nisl ipsum, gravida sit amet placerat id, condimentum ut enim. Vivamus semper viverra augue, a ultrices lectus ornare at.
            </div>
        </main>
        </>
    )
}