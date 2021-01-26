import * as React from 'react';

import MainLayout from "../src/components/shared/MainLayout";
import HomeLayout from "../src/components/Home/HomeLayout";


export default function Index() {
  return (
    <MainLayout>
      <HomeLayout />
    </MainLayout>
  );
}
