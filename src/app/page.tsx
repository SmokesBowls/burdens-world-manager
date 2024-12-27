import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Map, Building } from 'lucide-react';

const LocationManager = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="w-6 h-6" />
          Location Database
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="planets" className="w-full">
          <TabsList>
            <TabsTrigger value="planets">Planets</TabsTrigger>
            <TabsTrigger value="regions">Regions</TabsTrigger>
            <TabsTrigger value="settlements">Settlements</TabsTrigger>
          </TabsList>

          <TabsContent value="planets" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Earth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A post-apocalyptic Earth struggling with the invasion of Reptilians, Giants, and Anunnaki.
                </p>
              </CardContent>
            </Card>
            {/* Add more planets */}
          </TabsContent>

          {/* Add other tab contents */}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LocationManager;