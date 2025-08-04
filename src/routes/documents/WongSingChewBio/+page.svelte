<script>
    import Document from "../Document.svelte";
    const images = [
        {
        alt: "Wong Sing Chew Bio Page 1",
        src: "/images/documents/BiographyOfWongSingChew1.jpg",
        title: "Page 1"
        },
        {
        alt: "Wong Sing Chew Bio Page 2",
        src: "/images/documents/BiographyOfWongSingChew2.jpg",
        title: "Page 2"
        },
        {
        alt: "Wong Sing Chew Bio Page 3",
        src: "/images/documents/BiographyOfWongSingChew3.jpg",
        title: "Page 3"
        },
        {
        alt: "Wong Sing Chew Bio Page 4",
        src: "/images/documents/BiographyOfWongSingChew4.jpg",
        title: "Page 4"
        }
    ]
</script>

<Document title="Wong Sing Chew Biography" date="Unknown" description="Working on it" images={images}></Document>