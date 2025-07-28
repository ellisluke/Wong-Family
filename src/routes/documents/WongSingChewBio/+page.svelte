<script>
    import Document from "$lib/Document.svelte";
    const images = [
        {
        alt: "Wong Sing Chew Bio Page 1",
        src: "/src/lib/images/documents/BiographyOfWongSingChew1.jpg",
        title: "Page 1"
        },
        {
        alt: "Wong Sing Chew Bio Page 2",
        src: "/src/lib/images/documents/BiographyOfWongSingChew2.jpg",
        title: "Page 2"
        },
        {
        alt: "Wong Sing Chew Bio Page 3",
        src: "/src/lib/images/documents/BiographyOfWongSingChew3.jpg",
        title: "Page 3"
        },
        {
        alt: "Wong Sing Chew Bio Page 4",
        src: "/src/lib/images/documents/BiographyOfWongSingChew4.jpg",
        title: "Page 4"
        }
    ]
</script>

<Document title="Wong Sing Chew Biography" date="Unknown" description="Working on it" images={images}></Document>